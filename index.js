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
      const productData = [
        {
          title: '云南宾川妮娜皇后葡萄',
          desc: '因为种植要求极高，果子着色困难，所以妮娜皇后对种植区的温、湿度，地形海拔都有严格要求，目前国内种植葡萄的产区非常多，云南省宾川县的地形条件是各产区中的佼佼者。',
          priceRange: [60, 80],
          imgList: [
            'https://gips3.baidu.com/it/u=3857764289,1854968161&fm=3074&app=3074&f=JPEG?w=366&h=379&type=normal&func=',
            "https://gips1.baidu.com/it/u=4287645716,1168399570&fm=3074&app=3074&f=JPEG",
            "https://res.zgfznews.com/data4/1/images/2024/1124/17324318197621877_5607x3154.jpg",
            "https://q2.itc.cn/q_70/images01/20240812/cb28e4d1a72b4ea395e01bb6cf95fe77.jpeg"
          ],
          category: '水果',
          origin: '云南宾川',
          tags: ['新鲜', '产地直发', '顺丰包邮']
        },
        {
          title: '泰国进口山竹',
          desc: '来自生态环境良好，气候条件优越的泰国南部陶公府、也拉府等地区，坚持树上自然熟，品质自然非同一般。5A级好果，果壳占比低，食用率更高，口感更香甜。',
          priceRange: [40, 55],
          imgList: [
            'https://img2.baidu.com/it/u=2891516779,3377773391&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://img1.baidu.com/it/u=1234567890,987654321&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://img0.baidu.com/it/u=9876543210,123456789&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://gips1.baidu.com/it/u=4287645716,1168399570&fm=3074&app=3074&f=JPEG'
          ],
          category: '进口水果',
          origin: '泰国',
          tags: ['进口', '新鲜', '包邮']
        },
        {
          title: '香格里拉新鲜松茸',
          desc: '产自海拔3200米以上的香格里拉原始森林，野生采摘，营养丰富。松茸含有多种氨基酸和微量元素，具有很高的营养价值。采摘后24小时内发货，保证新鲜度。',
          priceRange: [120, 150],
          imgList: [
            'https://img1.baidu.com/it/u=1111111111,2222222222&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://img2.baidu.com/it/u=3333333333,4444444444&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://img3.baidu.com/it/u=5555555555,6666666666&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://res.zgfznews.com/data4/1/images/2024/1124/17324318197621877_5607x3154.jpg'
          ],
          category: '菌菇',
          origin: '香格里拉',
          tags: ['野生', '高原', '营养丰富']
        },
        {
          title: '海南黄金百香果',
          desc: '产自海南岛热带气候区，果肉金黄，香气浓郁，酸甜可口。富含维生素C和膳食纤维，具有很好的保健功效。果园直采，新鲜发货。',
          priceRange: [20, 35],
          imgList: [
            'https://img4.baidu.com/it/u=7777777777,8888888888&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://img5.baidu.com/it/u=9999999999,1010101010&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://gips3.baidu.com/it/u=3857764289,1854968161&fm=3074&app=3074&f=JPEG?w=366&h=379&type=normal&func=',
            'https://q2.itc.cn/q_70/images01/20240812/cb28e4d1a72b4ea395e01bb6cf95fe77.jpeg'
          ],
          category: '热带水果',
          origin: '海南',
          tags: ['热带', '维C丰富', '香甜']
        },
        {
          title: '东北野生姑娘果',
          desc: '来自东北黑土地的野生姑娘果，又名灯笼果，酸甜可口，营养丰富。含有丰富的维生素和矿物质，具有清热解毒的功效。纯天然无污染，绿色健康。',
          priceRange: [25, 40],
          imgList: [
            'https://img7.baidu.com/it/u=1414141414,1515151515&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://img8.baidu.com/it/u=1616161616,1717171717&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://res.zgfznews.com/data4/1/images/2024/1124/17324318197621877_5607x3154.jpg',
            'https://gips1.baidu.com/it/u=4287645716,1168399570&fm=3074&app=3074&f=JPEG'
          ],
          category: '野生水果',
          origin: '东北',
          tags: ['野生', '无污染', '营养丰富']
        },
        {
          title: '云南高原蜜薯',
          desc: '产自云南高原地区，昼夜温差大，光照充足，生长环境优越。蜜薯肉质细腻，甜度高，口感软糯香甜。富含膳食纤维和胡萝卜素，营养价值极高。',
          priceRange: [15, 25],
          imgList: [
            'https://img10.baidu.com/it/u=2020202020,2121212121&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://img11.baidu.com/it/u=2222222222,2323232323&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://q2.itc.cn/q_70/images01/20240812/cb28e4d1a72b4ea395e01bb6cf95fe77.jpeg',
            'https://gips3.baidu.com/it/u=3857764289,1854968161&fm=3074&app=3074&f=JPEG?w=366&h=379&type=normal&func='
          ],
          category: '农产品',
          origin: '云南',
          tags: ['高原', '香甜', '营养']
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
          id: idx + 1,
          title: productTemplate.title,
          desc: productTemplate.desc,
          price: (Math.random() * (productTemplate.priceRange[1] - productTemplate.priceRange[0]) + productTemplate.priceRange[0]).toFixed(2), // 在价格范围内随机
          unit: '斤',
          // 图片数组，支持多张图片
          imgList: [...productTemplate.imgList],
          // 保留单张图片字段作为兼容
          img: productTemplate.imgList[0],
          // 其他商品信息
          category: productTemplate.category,
          origin: productTemplate.origin,
          stock: Math.floor(Math.random() * 1000) + 100,
          sales: Math.floor(Math.random() * 500) + 50,
          tags: [...productTemplate.tags]
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