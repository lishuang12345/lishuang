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

    // 商品模板数据
    productTemplates: [
      {
        id: 1,
        title: '云南宾川妮娜皇后葡萄',
        desc: '因为种植要求极高，果子着色困难，所以妮娜皇后对种植区的温、湿度，地形海拔都有严格要求，目前国内种植葡萄的产区非常多，云南省宾川县的地形条件是各产区中的佼佼者。',
        price: '68.50',
        unit: '斤',
        imgList: [
          'https://gips3.baidu.com/it/u=3857764289,1854968161&fm=3074&app=3074&f=JPEG?w=366&h=379&type=normal&func=',
          "https://gips1.baidu.com/it/u=4287645716,1168399570&fm=3074&app=3074&f=JPEG",
          "https://res.zgfznews.com/data4/1/images/2024/1124/17324318197621877_5607x3154.jpg"
        ],
        img: 'https://gips3.baidu.com/it/u=3857764289,1854968161&fm=3074&app=3074&f=JPEG?w=366&h=379&type=normal&func=',
        category: '水果',
        origin: '云南宾川',
        stock: 850,
        sales: 320,
        tags: ['新鲜', '产地直发', '顺丰包邮']
      },
      {
        id: 2,
        title: '泰国进口山竹',
        desc: '来自生态环境良好，气候条件优越的泰国南部陶公府、也拉府等地区，坚持树上自然熟，品质自然非同一般。5A级好果，果壳占比低，食用率更高，口感更香甜，泰国昆明两地双重筛选，每天整柜到货，货源稳定，新鲜度好。',
        price: '45.80',
        unit: '斤',
        imgList: [
          'https://img2.baidu.com/it/u=2891516779,3377773391&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          'https://img1.baidu.com/it/u=1234567890,987654321&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          'https://img0.baidu.com/it/u=9876543210,123456789&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
        ],
        img: 'https://img2.baidu.com/it/u=2891516779,3377773391&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        category: '进口水果',
        origin: '泰国',
        stock: 420,
        sales: 156,
        tags: ['进口', '新鲜', '包邮']
      },
      {
        id: 3,
        title: '香格里拉新鲜松茸',
        desc: '产自海拔3200米以上的香格里拉原始森林，野生采摘，营养丰富。松茸含有多种氨基酸和微量元素，具有很高的营养价值。采摘后24小时内发货，保证新鲜度。',
        price: '128.00',
        unit: '斤',
        imgList: [
          'https://img1.baidu.com/it/u=1111111111,2222222222&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          'https://img2.baidu.com/it/u=3333333333,4444444444&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          'https://img3.baidu.com/it/u=5555555555,6666666666&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
        ],
        img: 'https://img1.baidu.com/it/u=1111111111,2222222222&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        category: '菌菇',
        origin: '香格里拉',
        stock: 120,
        sales: 89,
        tags: ['野生', '高原', '营养丰富']
      },
      {
        id: 4,
        title: '海南黄金百香果',
        desc: '产自海南岛热带气候区，果肉金黄，香气浓郁，酸甜可口。富含维生素C和膳食纤维，具有很好的保健功效。果园直采，新鲜发货。',
        price: '25.60',
        unit: '斤',
        imgList: [
          'https://img4.baidu.com/it/u=7777777777,8888888888&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          'https://img5.baidu.com/it/u=9999999999,1010101010&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          'https://img6.baidu.com/it/u=1212121212,1313131313&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
        ],
        img: 'https://img4.baidu.com/it/u=7777777777,8888888888&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        category: '热带水果',
        origin: '海南',
        stock: 680,
        sales: 245,
        tags: ['热带', '维C丰富', '香甜']
      },
      {
        id: 5,
        title: '东北野生姑娘果',
        desc: '来自东北黑土地的野生姑娘果，又名灯笼果，酸甜可口，营养丰富。含有丰富的维生素和矿物质，具有清热解毒的功效。纯天然无污染，绿色健康。',
        price: '32.80',
        unit: '斤',
        imgList: [
          'https://img7.baidu.com/it/u=1414141414,1515151515&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          'https://img8.baidu.com/it/u=1616161616,1717171717&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          'https://img9.baidu.com/it/u=1818181818,1919191919&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
        ],
        img: 'https://img7.baidu.com/it/u=1414141414,1515151515&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        category: '野生水果',
        origin: '东北',
        stock: 290,
        sales: 134,
        tags: ['野生', '无污染', '营养丰富']
      },
      {
        id: 6,
        title: '云南高原蜜薯',
        desc: '产自云南高原地区，昼夜温差大，光照充足，生长环境优越。蜜薯肉质细腻，甜度高，口感软糯香甜。富含膳食纤维和胡萝卜素，营养价值极高。',
        price: '18.90',
        unit: '斤',
        imgList: [
          'https://img10.baidu.com/it/u=2020202020,2121212121&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          'https://img11.baidu.com/it/u=2222222222,2323232323&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          'https://img12.baidu.com/it/u=2424242424,2525252525&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
        ],
        img: 'https://img10.baidu.com/it/u=2020202020,2121212121&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        category: '农产品',
        origin: '云南',
        stock: 950,
        sales: 378,
        tags: ['高原', '香甜', '营养']
      }
    ],

    // 商品列表
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
        productList,
        productTemplates
      } = this.data;
      if (isRefresh) {
        page = 1;
        productList = [];
      }

      // 总商品数量为模板数量的5倍（每个模板重复5次，总共30条）
      const total = productTemplates.length * 5;
      const newList = [];
      
      for (let i = 0; i < pageSize; i++) {
        const idx = (page - 1) * pageSize + i;
        if (idx >= total) break;

        // 根据索引选择对应的模板
        const templateIndex = idx % productTemplates.length;
        const template = productTemplates[templateIndex];
        const copyNumber = Math.floor(idx / productTemplates.length) + 1;

        // 基于模板创建商品数据，添加一些变化
        const product = {
          id: idx + 1,
          title: template.title + (copyNumber > 1 ? ` (${copyNumber})` : ''),
          desc: template.desc,
          price: template.price,
          unit: template.unit,
          imgList: [...template.imgList],
          img: template.img,
          category: template.category,
          origin: template.origin,
          stock: template.stock + Math.floor(Math.random() * 100) - 50, // 添加随机库存变化
          sales: template.sales + Math.floor(Math.random() * 50) - 25, // 添加随机销量变化
          tags: [...template.tags]
        };

        // 确保库存和销量不为负数
        if (product.stock < 0) product.stock = Math.abs(product.stock);
        if (product.sales < 0) product.sales = Math.abs(product.sales);

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