// index.js
// const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    swiperImg: [
      "https://gips1.baidu.com/it/u=4287645716,1168399570&fm=3074&app=3074&f=JPEG",
      "https://res.zgfznews.com/data4/1/images/2024/1124/17324318197621877_5607x3154.jpg",
      "https://q2.itc.cn/q_70/images01/20240812/cb28e4d1a72b4ea395e01bb6cf95fe77.jpeg"
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,

    productList: [],
    page: 1,
    pageSize: 10,
    hasMore: true,
    loading: false,

    // 底部导航
    active: 0,
    tabbarList: [{
        url: '/pages/index/index',
        icon: 'wap-home',
        text: '首页'
      },
      {
        url: '/pages/supply/supply',
        icon: 'cart',
        text: '供货'
      },
      {
        url: '/pages/select/select',
        icon: 'cluster',
        text: '选品'
      },
      {
        url: '/pages/mine/mine',
        icon: 'contact',
        text: '我的'
      }
    ]
  },

  onLoad() {
    this.getProductList(true);
  },

  // 获取商品列表
  getProductList(isRefresh = false) {
    if (this.data.loading) return;
    this.setData({
      loading: true
    });

    // 模拟异步请求
    setTimeout(() => {
      let {
        page,
        pageSize,
        productList
      } = this.data;
      if (isRefresh) {
        page = 1;
        productList = [];
      }

      // 假设总共30条数据
      const total = 30;
      const newList = [];

      // 定义6种不同的商品数据模板
      const productData = [{
          title: '云南宾川妮娜皇后、云南宾川阳光玫瑰、云南红河蟠枣、云南紫皮百香果，一件代发选品',
          desc: '因为种植要求极高，果子着色困难，所以妮娜皇后对种植区的温 、湿度，地形海拔都有严格要求，目前国内种植葡萄的产区非常多，云南省宾川县的地形条件是各产区中的佼佼者。',
          chandi:'昆明',
          imgList: [
            'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMaick6BEXYybGg1LKmw968icPDWCVQW3qcZv8Awx05v3AA5Ionvricse0DaicRKZHGcjjDEUuIibmWjoA/640?wx_fmt=jpeg&randomid=btw77cjh&tp=webp&wxfrom=5&wx_lazy=1',
            "https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMaick6BEXYybGg1LKmw968icicdMmMBZSPsibibEibYFFK4s4Nia85yQ5CJqVbQCFrmibxV6Uo7CJzrML8Gw/640?wx_fmt=jpeg&randomid=azovqk2j&tp=webp&wxfrom=5&wx_lazy=1",
            "https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMaick6BEXYybGg1LKmw968icICszSgDEnZwBXT9LibO1ia0ngbFbSTqZYEqdVoXkIWAiaNoSGglS4k9AQ/640?wx_fmt=jpeg&randomid=3l4e56qp&tp=webp&wxfrom=5&wx_lazy=1",
          ],
          times: '6-7月',
          pknd: '保鲜',
          price:'200元起',
          bksm:'保鲜',
          ghsyq:'5000公斤，15天内到货',
          dhjy:'数量多分批订',
          hsqdhkq:'水果店',
          sku: ['2斤', '5斤', '10斤']
        },
        {
          title: '新疆阿克苏苹果、红富士苹果、冰糖心苹果，产地直发',
          desc: '新疆阿克苏地区光照充足，昼夜温差大，造就了苹果独特的冰糖心，果肉脆嫩多汁，甜度极高，是苹果中的极品。',
          chandi:'阿克苏',
          imgList: [
            'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMaick6BEXYybGg1LKmw968icPDWCVQW3qcZv8Awx05v3AA5Ionvricse0DaicRKZHGcjjDEUuIibmWjoA/640?wx_fmt=jpeg&randomid=btw77cjh&tp=webp&wxfrom=5&wx_lazy=1',
            "https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMaick6BEXYybGg1LKmw968icicdMmMBZSPsibibEibYFFK4s4Nia85yQ5CJqVbQCFrmibxV6Uo7CJzrML8Gw/640?wx_fmt=jpeg&randomid=azovqk2j&tp=webp&wxfrom=5&wx_lazy=1",
          ],
          times: '10-11月',
          pknd: '冷藏',
          price:'150元起',
          bksm:'冷藏保鲜',
          ghsyq:'3000公斤，10天内到货',
          dhjy:'现货供应',
          hsqdhkq:'超市、水果店',
          sku: ['3斤', '5斤', '10斤']
        },
        {
          title: '海南三亚芒果、台农一号芒果、金煌芒果，热带水果',
          desc: '海南三亚得天独厚的热带气候，培育出的芒果果肉厚实，香甜可口，营养丰富，是热带水果的代表。',
          chandi:'三亚',
          imgList: [
            'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMaick6BEXYybGg1LKmw968icPDWCVQW3qcZv8Awx05v3AA5Ionvricse0DaicRKZHGcjjDEUuIibmWjoA/640?wx_fmt=jpeg&randomid=btw77cjh&tp=webp&wxfrom=5&wx_lazy=1',
          ],
          times: '4-6月',
          pknd: '常温',
          price:'180元起',
          bksm:'常温保存',
          ghsyq:'2000公斤，7天内到货',
          dhjy: '预订制',
          hsqdhkq:'水果店、餐厅',
          sku: ['1斤', '3斤', '5斤']
        },
        {
          title: '山东烟台大樱桃、红灯樱桃、美早樱桃，鲜甜可口',
          desc: '山东烟台是中国樱桃之乡，这里的樱桃个大饱满，酸甜适中，果皮薄嫩，果肉厚实，是夏季时令水果的首选。',
          chandi:'烟台',
          imgList: [
            'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMaick6BEXYybGg1LKmw968icPDWCVQW3qcZv8Awx05v3AA5Ionvricse0DaicRKZHGcjjDEUuIibmWjoA/640?wx_fmt=jpeg&randomid=btw77cjh&tp=webp&wxfrom=5&wx_lazy=1',
            "https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMaick6BEXYybGg1LKmw968icicdMmMBZSPsibibEibYFFK4s4Nia85yQ5CJqVbQCFrmibxV6Uo7CJzrML8Gw/640?wx_fmt=jpeg&randomid=azovqk2j&tp=webp&wxfrom=5&wx_lazy=1",
          ],
          times: '5-7月',
          pknd: '冷链',
          price:'300元起',
          bksm:'冷链运输',
          ghsyq:'1000公斤，3天内到货',
          dhjy:'限时抢购',
          hsqdhkq:'高端水果店',
          sku: ['500g', '1斤', '2斤']
        },
        {
          title: '广西荔枝、桂味荔枝、糯米糍荔枝，岭南佳果',
          desc: '广西荔枝以其独特的品种和优良的品质闻名全国，果肉晶莹剔透，甜如蜜糖，是夏季消暑的最佳选择。',
          chandi:'广西',
          imgList: [
            'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMaick6BEXYybGg1LKmw968icPDWCVQW3qcZv8Awx05v3AA5Ionvricse0DaicRKZHGcjjDEUuIibmWjoA/640?wx_fmt=jpeg&randomid=btw77cjh&tp=webp&wxfrom=5&wx_lazy=1',
            "https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMaick6BEXYybGg1LKmw968icicdMmMBZSPsibibEibYFFK4s4Nia85yQ5CJqVbQCFrmibxV6Uo7CJzrML8Gw/640?wx_fmt=jpeg&randomid=azovqk2j&tp=webp&wxfrom=5&wx_lazy=1",
            "https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMaick6BEXYybGg1LKmw968icICszSgDEnZwBXT9LibO1ia0ngbFbSTqZYEqdVoXkIWAiaNoSGglS4k9AQ/640?wx_fmt=jpeg&randomid=3l4e56qp&tp=webp&wxfrom=5&wx_lazy=1",
          ],
          times: '6-8月',
          pknd: '保鲜',
          price:'250元起',
          bksm:'保鲜包装',
          ghsyq:'1500公斤，5天内到货',
          dhjy:'季节性供应',
          hsqdhkq:'水果店、电商',
          sku: ['1斤', '2斤', '5斤']
        },
        {
          title: '四川攀枝花芒果、凯特芒果、贵妃芒果，川果精品',
          desc: '四川攀枝花独特的干热河谷气候，造就了芒果的卓越品质，果肉细腻，香味浓郁，是芒果中的上乘之选。',
          chandi:'攀枝花',
          imgList: [
            'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMaick6BEXYybGg1LKmw968icPDWCVQW3qcZv8Awx05v3AA5Ionvricse0DaicRKZHGcjjDEUuIibmWjoA/640?wx_fmt=jpeg&randomid=btw77cjh&tp=webp&wxfrom=5&wx_lazy=1',
          ],
          times: '7-9月',
          pknd: '常温',
          price:'160元起',
          bksm:'纸箱包装',
          ghsyq:'2500公斤，8天内到货',
          dhjy:'批量供应',
          hsqdhkq:'批发市场',
          sku: ['2斤', '5斤', '10斤']
        }
      ];

      for (let i = 0; i < pageSize; i++) {
        const idx = (page - 1) * pageSize + i;
        if (idx >= total) break;

        // 根据索引循环选择6种不同的商品数据
        const dataIndex = idx % 6;
        const productTemplate = productData[dataIndex];

        // 创建商品数据，支持图片数组
        const product = {
          id: idx+1,
          title: productTemplate.title,
          desc: productTemplate.desc,
          price: productTemplate.price,
          times: productTemplate.times,
          // 图片数组，支持多张图片
          imgList: [...productTemplate.imgList],
          // 保留单张图片字段作为兼容
          img: productTemplate.imgList[0],
          // 其他商品信息
          chandi: productTemplate.chandi,
          pknd: productTemplate.pknd,
          bksm: productTemplate.bksm,
          ghsyq: productTemplate.ghsyq,
          dhjy: productTemplate.dhjy,
          hsqdhkq: productTemplate.hsqdhkq,
          // stock: Math.floor(Math.random() * 1000) + 100,
          // sales: Math.floor(Math.random() * 500) + 50,
          sku: [...productTemplate.sku]
        };

        newList.push(product);
      }

      const hasMore = (page * pageSize) < total;
      this.setData({
        productList: isRefresh ? newList : productList.concat(newList),
        page: page + 1,
        hasMore,
        loading: false
      });
      if (isRefresh) wx.stopPullDownRefresh();
    }, 800);
  },

  // 跳转到详情页
  goDetail(e) {
    const item = e.currentTarget.dataset.item;

    // 构建跳转参数
    const params = {
      id: item.id,
      title: encodeURIComponent(item.title),
      desc: encodeURIComponent(item.desc),
      price: item.price,
      unit: item.unit,
      category: item.category,
      origin: item.origin,
      stock: item.stock,
      sales: item.sales,
      tags: encodeURIComponent(JSON.stringify(item.tags))
    };

    // 处理图片数组参数
    if (item.imgList && item.imgList.length > 0) {
      params.imgList = encodeURIComponent(JSON.stringify(item.imgList));
    } else if (item.img) {
      params.img = encodeURIComponent(item.img);
    }

    // 构建URL参数
    const urlParams = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');

    wx.navigateTo({
      url: `../../package/pages/detail/detail?${urlParams}`,
      success: () => {
        console.log('跳转到详情页成功', item);
      },
      fail: (err) => {
        console.error('跳转失败', err);
        wx.showToast({
          title: '跳转失败',
          icon: 'none'
        });
      }
    });
  },

  // 下拉刷新
  onPullDownRefresh() {
    this.getProductList(true);
  },

  // 上拉加载
  onReachBottom() {
    if (this.data.hasMore) {
      this.getProductList();
    }
  },

  // 底部导航
  onChange(e) {
    const index = e.detail;
    const url = this.data.tabbarList[index].url;
    this.setData({
      active: index
    });
    if (getCurrentPages().length > 3) {
      wx.reLaunch({
        url
      });
    } else {
      wx.redirectTo({
        url
      });
    }
  },
  onShow() {
    const current = getCurrentPages()[getCurrentPages().length - 1].route;
    const idx = this.data.tabbarList.findIndex(item => item.url.replace(/^\//, '') === current);
    if (idx !== -1) {
      this.setData({
        active: idx
      });
    }
  }

})