import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import List from './list';
export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        {/*头部*/}
        <View style={styles.head}>
          <View style={styles.headItem}>
            <FontAwesome name="qrcode" size={24} />
            <Text style={styles.headItemText}>扫一扫</Text>
          </View>
          <View style={styles.headItem}>
            <FontAwesome name="barcode" size={24} />
            <Text style={styles.headItemText}>付款码</Text>
          </View>
          <View style={styles.headItem}>
            <FontAwesome name="credit-card-alt" size={24} />
            <Text style={styles.headItemText}>红包/卡券</Text>
          </View>
          <View style={styles.headItem}>
            <FontAwesome name="bicycle" size={24} />
            <Text style={styles.headItemText}>骑车</Text>
          </View>
        </View>

        {/*Nav选项菜单*/}
        <View>
          <Swiper style={styles.nav} paginationStyle={styles.navPagination}>
            <View style={styles.items}>
              <View style={styles.item}>
                <FontAwesome name="cutlery" size={24} color="#ed5736" />
                <Text style={styles.itemText}>外卖</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="coffee" size={24} color="#9d2933" />
                <Text style={styles.itemText}>美食</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="home" size={24} color="#3eede7" />
                <Text style={styles.itemText}>酒店/住宿</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="home" size={24} color="#ff461f" />
                <Text style={styles.itemText}>休闲/玩乐</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="film" size={24} color="#e9bb1d" />
                <Text style={styles.itemText}>电影/演出</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="truck" size={24} color="#88ada6" />
                <Text style={styles.itemText}>打车</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="home" size={24} color="#db5a6b" />
                <Text style={styles.itemText}>丽人/美发</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="space-shuttle" size={24} color="#a3d900" />
                <Text style={styles.itemText}>周边游/旅游</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="bell" size={24} color="#cca4e3" />
                <Text style={styles.itemText}>充值中心</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="fighter-jet" size={24} color="#75878a" />
                <Text style={styles.itemText}>火车票/机票</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="pagelines" size={24} color="#00bc12" />
                <Text style={styles.itemText}>免费领水果</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="pied-piper-alt" size={24} color="#bce672" />
                <Text style={styles.itemText}>跑腿代购</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="medkit" size={24} color="#f20c00" />
                <Text style={styles.itemText}>超市/药店</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="music" size={24} color="#4b5cc4" />
                <Text style={styles.itemText}>KTV</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="gift" size={24} color="#ed5736" />
                <Text style={styles.itemText}>免费领福利</Text>
              </View>
            </View>
            <View style={styles.items}>
              <View style={styles.item}>
                <FontAwesome name="gift" size={24} color="#ed5736" />
                <Text style={styles.itemText}>免费领福利</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="gift" size={24} color="#ed5736" />
                <Text style={styles.itemText}>免费领福利</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="gift" size={24} color="#ed5736" />
                <Text style={styles.itemText}>免费领福利</Text>
              </View>
            </View>
            <View style={styles.items}>
              <View style={styles.item}>
                <FontAwesome name="pagelines" size={24} color="#00bc12" />
                <Text style={styles.itemText}>免费领水果</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="pagelines" size={24} color="#00bc12" />
                <Text style={styles.itemText}>免费领水果</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="pagelines" size={24} color="#00bc12" />
                <Text style={styles.itemText}>免费领水果</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="pagelines" size={24} color="#00bc12" />
                <Text style={styles.itemText}>免费领水果</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="pagelines" size={24} color="#00bc12" />
                <Text style={styles.itemText}>免费领水果</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="pagelines" size={24} color="#00bc12" />
                <Text style={styles.itemText}>免费领水果</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="pagelines" size={24} color="#00bc12" />
                <Text style={styles.itemText}>免费领水果</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="pagelines" size={24} color="#00bc12" />
                <Text style={styles.itemText}>免费领水果</Text>
              </View>
            </View>
          </Swiper>
        </View>

        {/*轮播*/}

        <Swiper
          style={styles.swiper}
          paginationStyle={styles.swiperPagination}
          dotStyle={styles.swiperDot}
          activeDotStyle={styles.swiperActiveDot}>
          <View style={styles.swiperItem}>
            <ImageBackground
              style={styles.img}
              imageStyle={styles.imgStyle}
              source={require('../../../assets/imgs/banner1.jpg')}
            />
          </View>
          <View style={styles.swiperItem}>
            <ImageBackground
              style={styles.img}
              imageStyle={styles.imgStyle}
              source={require('../../../assets/imgs/banner2.jpg')}
            />
          </View>
          <View style={styles.swiperItem}>
            <ImageBackground
              style={styles.img}
              imageStyle={styles.imgStyle}
              source={require('../../../assets/imgs/banner1.jpg')}
            />
          </View>
          <View style={styles.swiperItem}>
            <ImageBackground
              style={styles.img}
              imageStyle={styles.imgStyle}
              source={require('../../../assets/imgs/banner2.jpg')}
            />
          </View>
          <View style={styles.swiperItem}>
            <ImageBackground
              style={styles.img}
              imageStyle={styles.imgStyle}
              source={require('../../../assets/imgs/banner1.jpg')}
            />
          </View>
          <View style={styles.swiperItem}>
            <ImageBackground
              style={styles.img}
              imageStyle={styles.imgStyle}
              source={require('../../../assets/imgs/banner2.jpg')}
            />
          </View>
        </Swiper>

        <View>
          <List />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  //头部
  head: {
    backgroundColor: '#FFC300',
    paddingHorizontal: 40,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headItem: {
    alignItems: 'center',
  },
  headItemText: {
    marginTop: 8,
    fontWeight: '200',
  },
  //选项菜单
  nav: {
    height: 200,
    paddingBottom: 0,
  },
  items: {
    padding: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '20%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 12,
    marginTop: 6,
  },
  navPagination: {
    bottom: 4,
  },
  //轮播
  swiper: {
    height: 120,
  },
  swiperItem: {
    padding: 10,
  },
  img: {
    height: '100%',
  },
  imgStyle: {borderRadius: 6},
  swiperPagination: {
    bottom: 12,
  },
  swiperDot: {
    width: 4,
    height: 4,
  },
  swiperActiveDot: {
    width: 4,
    height: 4,
  },
});
