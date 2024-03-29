import React, { useMemo } from "react";
import {
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Animated,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import {
  Image,
  Badge,
  Icon,
  Rating,
  AirbnbRating,
} from "react-native-elements";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Text, Button } from "@ui-kitten/components";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import InputSpinner from "react-native-input-spinner";
import { db, firebase } from "../../../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { change_cart } from "../../../redux/ducks";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
const { height, width } = Dimensions.get("screen");
const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;
const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SiZE = DOT_SIZE + DOT_SPACING;

// const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
//     // animated variables
//     const leftColor = useSelector((state) => state.theme.theme.HEADER_LEFT);
//     const animatedOpacity = useMemo(
//         () =>
//             interpolate(animatedIndex, {
//                 inputRange: [0, 1],
//                 outputRange: [0, 1],
//                 extrapolate: Extrapolate.CLAMP,
//             }),
//         [animatedIndex]
//     );

//     // styles
//     const containerStyle = useMemo(
//         () => [
//             style,
//             {
//                 backgroundColor: leftColor,
//                 opacity: animatedOpacity,
//             },
//         ],
//         [style, animatedOpacity]
//     );

//     return <Animate.View style={containerStyle} />;
// };

const DetailScreeen = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const data = route.params.data;
  // console.log(data);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  function currencyFormat(num) {
    return "₫" + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const namemap = {
    Bảo: "Bảo hành",
    Tá: "Tác giả",
    "Nhà xuấ": "Nhà xuất bản",
    "Công ty phát": "Công ty phát hành",
    "Năm xuấ": "Năm xuất bản",
    "Số ": "Số trang",
  };
  const valuemap = {
    "Nhiều tá": "Nhiều tác giả",
    "NXB Lao": "NXB Lao Động",
  };
  const getName = (u) => {
    let name = u.name;
    let value = u.value;
    // console.log(name);
    return namemap[name] + ": " + (valuemap[value] ? valuemap[value] : value);
  };
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };
  const [loading, setLoading] = React.useState(true);
  const [liked, setLiked] = React.useState(false);
  const userid = useSelector((state) => state.user.id);
  const user = db.collection("users").doc(userid);
  const [stock, setStock] = React.useState(1);
  React.useEffect(() => {
    user.get().then((doc) => {
      console.log("get like");
      setLiked(doc.data().likeItem.includes(data.itemid));
      setLoading(false);
    });
  });
  const productid = data.itemid;
  const setUpdateLike = () => {
    console.log("check like", liked);
    if (liked) {
      console.log("not liking");
      setLiked(false);
      user.update({
        likeItem: firebase.firestore.FieldValue.arrayRemove(data.itemid),
      });
    } else {
      setLiked(true);
      console.log("liking");
      user.update({
        likeItem: firebase.firestore.FieldValue.arrayUnion(data.itemid),
      });
    }
  };

  const addToCart = () => {
    const newKey = "cartItem." + productid;
    console.log(newKey);
    user
      .update({
        [newKey]: firebase.firestore.FieldValue.increment(stock),
      })
      .then(() => {
        showToast();
        user.get().then((doc) => {
          dispatch(change_cart(Object.keys(doc.data().cartItem).length));
        });
      });
  };

  const showToast = () => {
    Toast.show({
      text1: "Thêm vào giỏ hàng thành công",
      text2: "Mời bạn đến kiểm tra giỏ hàng nha 👋",
    });
  };
  const dispatch = useDispatch();
  const cartNumber = useSelector((state) => state.cart.stock);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <StatusBar hidden /> */}

      <View style={{ height: ITEM_HEIGHT, overflow: "hidden" }}>
        <Animated.FlatList
          data={data.images}
          keyExtractor={(item) => item}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: scrollY },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          renderItem={({ item }) => {
            return (
              <View key={item}>
                <Image
                  source={{
                    uri: "https://cf.shopee.vn/file/" + item,
                  }}
                  containerStyle={styles.image}
                  transition
                  // PlaceholderContent={<ActivityIndicator />}
                />
              </View>
            );
          }}
        />
        <View style={styles.pagination}>
          {data.images.map((u, i) => {
            return <View key={i} style={[styles.dot]} />;
          })}
          <Animated.View
            style={[
              styles.dotIndicator,
              {
                transform: [
                  {
                    translateY: Animated.divide(
                      scrollY,
                      ITEM_HEIGHT
                    ).interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, DOT_INDICATOR_SiZE],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      </View>
      <BottomSheet
        style={{
          elevation: 100,
        }}
        enableBottomClamp
        initialSnapIndex={0}
        // backdropComponent={CustomBackdrop}
        snapPoints={[height - ITEM_HEIGHT, height - 2 * insets.top]}
      >
        <BottomSheetScrollView
          style={{ backgroundColor: "#fff" }}
          contentContainerStyle={{ padding: 20 }}
        >
          <Text>{data.name}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "red" }}>
              {currencyFormat(data.price / 100000)}
            </Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                color: "#999",
                marginLeft: 5,
              }}
            >
              {data.price_before_discount != null
                ? currencyFormat(data.price_before_discount / 100000)
                : ""}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Rating
                type="custom"
                // showRating
                fractions={1}
                readonly
                startingValue={data.item_rating.rating_star}
                // type="custom"
                ratingBackgroundColor="#c8c7c8"
                ratingCount={5}
                imageSize={17}
                // onFinishRating={ratingCompleted}
                style={{
                  justifyContent: "flex-start",
                }}
              />
              <Text style={{ marginLeft: 5 }}>
                {Math.round(data.item_rating.rating_star * 10) / 10}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name={liked ? "heart" : "heart-outline"}
                type="ionicon"
                style={{}}
                color={liked && "red"}
                onPress={() => {
                  setUpdateLike();
                }}
              />
              <Icon
                name="share-social-outline"
                type="ionicon"
                style={{ marginLeft: 10 }}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#f0f0f0",
              borderBottomWidth: 1,
              marginTop: 10,
            }}
          />
          <View style={{ marginTop: 10 }}>
            {typeof data.attributes != "undefined" ? (
              data.attributes.map((u, i) => {
                return <Text key={i}>{getName(u)}</Text>;
              })
            ) : (
              <></>
            )}
          </View>
          <View
            style={{
              borderBottomColor: "#f0f0f0",
              borderBottomWidth: 1,
              marginTop: 10,
            }}
          />
          <View style={{ marginVertical: 20 }}>
            <Text
              style={{
                marginBottom: 10,
                lineHeight: 22,
                color: "#000",
              }}
            >
              {data.description}
            </Text>
            <View
              style={{
                borderBottomColor: "#f0f0f0",
                borderBottomWidth: 1,
                marginTop: 10,
              }}
            />
            <Text style={{ marginTop: 10, color: "red" }}>
              Còn lại: {data.stock} sản phẩm
            </Text>
            <Text style={{ fontWeight: "bold", marginTop: 10 }}>
              Đánh giá sản phẩm
            </Text>
            <Rating
              showRating
              fractions={1}
              readonly
              startingValue={data.item_rating.rating_star}
              type="custom"
              ratingBackgroundColor="#c8c7c8"
              ratingCount={5}
              imageSize={30}
              // onFinishRating={ratingCompleted}
              style={{ marginTop: 10 }}
            />
          </View>
        </BottomSheetScrollView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <InputSpinner
            max={data.stock}
            min={1}
            step={1}
            colorMax={"#f04048"}
            // colorMin={"#40c5f4"}
            value={stock}
            onChange={(stock) => {
              setStock(stock);
            }}
            style={{
              height: 50,
              margin: 10,
              flex: 1,
              // backgroundColor:
            }}
            skin="clean"
          />
          <Button
            appearance="outline"
            accessoryLeft={() => (
              <Icon name="cart" type="ionicon" size={30} color="red" />
            )}
            style={{
              borderRadius: 25,
              height: 50,
              flex: 1,
              margin: 10,
              // elevation: 10,
              // marginTop: 0,
            }}
            status="danger"
            onPress={() => {
              console.log("Begin add to cart");
              addToCart();
            }}
          ></Button>
        </View>
      </BottomSheet>
      <Toast />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: { width: ITEM_WIDTH, height: ITEM_HEIGHT },
  pagination: {
    position: "absolute",
    top: ITEM_WIDTH / 2,
    left: 20,
  },

  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: "#333",
    marginBottom: DOT_SPACING,
  },
  dotIndicator: {
    width: DOT_INDICATOR_SiZE,
    height: DOT_INDICATOR_SiZE,
    borderRadius: DOT_INDICATOR_SiZE,
    borderWidth: 1,
    borderColor: "#333",
    position: "absolute",
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
  },
});

export default DetailScreeen;
