// package/pages/supplier/supplier.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    supplier: '',

    // 商品列表
    productList: [],
    productList0: [],
    page: 1,
    pageSize: 10,
    hasMore: true,
    loading: false,


    // 图片相关
    imgList0: [
      'https://gips3.baidu.com/it/u=3857764289,1854968161&fm=3074&app=3074&f=JPEG?w=366&h=379&type=normal&func=',
      "https://gips1.baidu.com/it/u=4287645716,1168399570&fm=3074&app=3074&f=JPEG",
      "https://res.zgfznews.com/data4/1/images/2024/1124/17324318197621877_5607x3154.jpg",
      "https://q2.itc.cn/q_70/images01/20240812/cb28e4d1a72b4ea395e01bb6cf95fe77.jpeg"
    ],
    currentImageIndex: 0,

    menuList: [{
        id: 1,
        icon: 'service-o',
        text: '客服'
      },
      {
        id: 2,
        icon: 'todo-list-o',
        text: '查看意向选品'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const safeDecode = (str) => {
      if (!str) return '';
      try {
        // 小程序已自动解码一次，此处处理可能的多重编码
        return decodeURIComponent(str);
      } catch (e) {
        console.warn('解码失败，使用原始值:', str);
        return str;
      }
    };

    // 处理所有参数
    const decodedParams = {};
    for (const key in options) {
      decodedParams[key] = safeDecode(options[key]);
    }

    this.setData({
      id: decodedParams.id,
      supplier: decodedParams.supplier,
    });

    // 设置页面标题 - 修复：使用 title 属性而不是 supplier
    wx.setNavigationBarTitle({
      title: decodedParams.supplier || '供应商详情',
    });

    this.getProductList(true);
  },

  // 图片轮播切换
  onSwiperChange(e) {
    this.setData({
      currentImageIndex: e.detail.current
    });
  },

  // 预览图片
  previewImage(e) {
    const index = e.currentTarget.dataset.index;
    const urls = this.data.imgList0;

    wx.previewImage({
      current: urls[index],
      urls: urls,
      success: () => {
        console.log('图片预览成功');
      },
      fail: (err) => {
        console.error('图片预览失败：', err);
        wx.showToast({
          title: '图片预览失败',
          icon: 'none'
        });
      }
    });
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
        productList0,
      } = this.data;
      if (isRefresh) {
        page = 1;
        productList = [];
        productList0 = [];
      }
      // 假设总共30条数据
      const total = 6;
      const newList = [];
      const newList0 = [];
      
      // 定义6种不同的商品数据模板
      const productData = [{
        id: 1,
        title: '云南青香蕉苹果、红露苹果、黄金奈李、西双版纳糯玉米，一件代发选品',
        trait: '昭通苹果种植区平均海拔2300米，得天独厚的自然条件非常有利于苹果的生长。高海拔低纬度，光照强温差大，利于糖分的积累，每一颗都经过了阳光的洗礼，都香甜十足。',
        time: '2-3个月',
        supplier: '云南宾川天鲜配供应链',
        store: '昆明',
        sku: ["2斤", "5斤"],
        price: '320元', // 随机价格20-70
        // 图片数组，支持多张图片
        imgList: [
          'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMIKh5JCgEtnlohTia8tVyA0pMQrtiaokH7iaDzoDbTPYqt9HDwttobOpVa1Dr0sm3us55EbNicqGGbRQ/640?wx_fmt=jpeg&randomid=wv91uoxq&tp=webp&wxfrom=5&wx_lazy=1',
          "https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMIKh5JCgEtnlohTia8tVyA0muNXEJV6zwZMERzSrABOc4mib1icz6acWvQN34rbphuE3F7nRsc6LUwA/640?wx_fmt=jpeg&randomid=oish1u9r&tp=webp&wxfrom=5&wx_lazy=1",
        ],
        // 保留单张图片字段作为兼容
        img: 'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMIKh5JCgEtnlohTia8tVyA0pMQrtiaokH7iaDzoDbTPYqt9HDwttobOpVa1Dr0sm3us55EbNicqGGbRQ/640?wx_fmt=jpeg&randomid=wv91uoxq&tp=webp&wxfrom=5&wx_lazy=1',

      }, {
        id: 2,
        title: '云南红露苹果：早熟脆甜的"丑苹果"与电商入局指南',
        trait: '独特的质地与高甜脆爽的口感',
        time: '2-3个月',
        supplier: '昆明天山雪水果连锁',
        store: '昆明',
        sku: ["2斤", "5斤"],
        price: '390元', // 随机价格20-70
        // 图片数组，支持多张图片
        imgList: [
          'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNOcWmpjZPyQUIIziaFSzN1t4gclCTfh2dwzwSZq5AZvkYvLrAnibiafMN24n85w50MokhN2BGriaiaE8GA/640?wx_fmt=jpeg&from=appmsg&randomid=64bdsle3&tp=webp&wxfrom=5&wx_lazy=1',
          "https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNOcWmpjZPyQUIIziaFSzN1t4g2kaVgxj9aFbIuYibVsGM11jETTNtqmzu7CFqJ0F0u9w17hnJs5By8g/640?wx_fmt=jpeg&from=appmsg&randomid=jmpmxf8h&tp=webp&wxfrom=5&wx_lazy=1",
        ],
        // 保留单张图片字段作为兼容
        img: 'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNOcWmpjZPyQUIIziaFSzN1t4g2kaVgxj9aFbIuYibVsGM11jETTNtqmzu7CFqJ0F0u9w17hnJs5By8g/640?wx_fmt=jpeg&from=appmsg&randomid=jmpmxf8h&tp=webp&wxfrom=5&wx_lazy=1',

      }, {
        id: 3,
        title: '土特产店团购水果选品：云南蒙自蟠枣、石林人参果，泰国巴掌榴莲，蒙阴油蟠桃等推广文案',
        trait: '地域特色+高频刚需',
        time: '2-3个月',
        supplier: '云南宾川天鲜配供应链',
        store: '昆明',
        sku: ["2斤", "5斤"],
        price: '320元', // 随机价格20-70
        // 图片数组，支持多张图片
        imgList: [
          'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNOxiaxYo7x5nMUTyYAKLDia4yd59Vm1LDC7Cp8nPkgDZqCy5Rch6D7AoicHH6Uvxd0NIXupUV3M0yyicA/640?wx_fmt=jpeg&randomid=mrox8xoe&tp=webp&wxfrom=5&wx_lazy=1',
          "https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNOxiaxYo7x5nMUTyYAKLDia4yjmBH9sceKdla4VRqWUrHicXTDKXXjo7AwRks7a3bHUZVRlOBLHl1r4Q/640?wx_fmt=jpeg&randomid=qzy0puwl&tp=webp&wxfrom=5&wx_lazy=1",
        ],
        // 保留单张图片字段作为兼容
        img: 'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNOxiaxYo7x5nMUTyYAKLDia4yjmBH9sceKdla4VRqWUrHicXTDKXXjo7AwRks7a3bHUZVRlOBLHl1r4Q/640?wx_fmt=jpeg&randomid=qzy0puwl&tp=webp&wxfrom=5&wx_lazy=1',

      }];

      const productData0 = [{
        id: 1,
        title: '草莓：最常见的水果，最复杂的供应链',
        trait: '草莓属于多年生草本植物，生长周期露天最长的半年左右，最短的大棚栽种品种只要三个月。这跟大多数乔木类和藤曼类水果需要一年一季的生长周期有明显区别。',
        time: '一年四季',
        // 图片数组，支持多张图片
        imgList: [
          'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNP3iaSvnUSR2CPYgPPNzB8aN4BsuSAibicK63AJWIsowJxxbut6hjtyEg3gickrWbSl4WxTicrWq6fibTrQ/640?wx_fmt=jpeg&from=appmsg&randomid=7wnwcm3w&tp=webp&wxfrom=5&wx_lazy=1',
          'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNP3iaSvnUSR2CPYgPPNzB8aNPicp4lGgibgGT8AFy1epeNAzxy8dDI2OE7KEfAttU80tHaPJtL4gibhDg/640?wx_fmt=jpeg&randomid=mokr44b3&tp=webp&wxfrom=5&wx_lazy=1'
        ],
        // 保留单张图片字段作为兼容
        img: 'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNP3iaSvnUSR2CPYgPPNzB8aNPicp4lGgibgGT8AFy1epeNAzxy8dDI2OE7KEfAttU80tHaPJtL4gibhDg/640?wx_fmt=jpeg&randomid=mokr44b3&tp=webp&wxfrom=5&wx_lazy=1',
        // 其他商品信息
        price: '26.5元',
        store: '昆明',
        supplier: '云南大大小小水果',
        sku: ['2斤', '5斤', '10斤']
      }, {
        id: 2,
        title: '蓝莓：在不同消费场景的供应链难题和机会',
        trait: '蓝莓原产于美洲大陆。因为口感独特、果型独特',
        time: '一年四季',
        dates: '2025-7-30',
        // 图片数组，支持多张图片
        imgList: [
          'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMICJMZCYcumFtVLibIYe8TKicia3XJErviaMU5xmEic0ar8UY0yrwOLOiaPM3S0iazMdTSDLDkADazMaTOQ/640?wx_fmt=jpeg&randomid=54sk7xb6&tp=webp&wxfrom=5&wx_lazy=1',
          'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMICJMZCYcumFtVLibIYe8TKhPB8aQ5l8DmLoFSicCFqZsrfSIfOnOiaB6r2QcQHgvrDoBmrKFw88sqQ/640?wx_fmt=jpeg&randomid=62ruyklf&tp=webp&wxfrom=5&wx_lazy=1'
        ],
        // 保留单张图片字段作为兼容
        img: 'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMICJMZCYcumFtVLibIYe8TKhPB8aQ5l8DmLoFSicCFqZsrfSIfOnOiaB6r2QcQHgvrDoBmrKFw88sqQ/640?wx_fmt=jpeg&randomid=62ruyklf&tp=webp&wxfrom=5&wx_lazy=1',
        // 其他商品信息
        price: '26.5元',
        store: '昆明',
        supplier: '支支不果有限公司',
        sku: ['2斤', '5斤', '10斤']
      }, {
        id: 3,
        title: '云南青香蕉苹果、红露苹果、黄金奈李、西双版纳糯玉米，一件代发选品',
        trait: '昭通苹果种植区平均海拔2300米，得天独厚的自然条件非常有利于苹果的生长。高海拔低纬度，光照强温差大，利于糖分的积累，每一颗都经过了阳光的洗礼，都香甜十足。',
        time: '2-3个月',
        supplier: '云南宾川天鲜配供应链',
        store: '昆明',
        sku: ["2斤", "5斤"],
        price: '320元', // 随机价格20-70
        // 图片数组，支持多张图片
        imgList: [
          'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMIKh5JCgEtnlohTia8tVyA0pMQrtiaokH7iaDzoDbTPYqt9HDwttobOpVa1Dr0sm3us55EbNicqGGbRQ/640?wx_fmt=jpeg&randomid=wv91uoxq&tp=webp&wxfrom=5&wx_lazy=1',
          "https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMIKh5JCgEtnlohTia8tVyA0muNXEJV6zwZMERzSrABOc4mib1icz6acWvQN34rbphuE3F7nRsc6LUwA/640?wx_fmt=jpeg&randomid=oish1u9r&tp=webp&wxfrom=5&wx_lazy=1",
        ],
        // 保留单张图片字段作为兼容
        img: 'https://mmbiz.qpic.cn/mmbiz_jpg/AUJodBcUoNMIKh5JCgEtnlohTia8tVyA0pMQrtiaokH7iaDzoDbTPYqt9HDwttobOpVa1Dr0sm3us55EbNicqGGbRQ/640?wx_fmt=jpeg&randomid=wv91uoxq&tp=webp&wxfrom=5&wx_lazy=1',

      }]


      for (let i = 0; i < pageSize; i++) {
        const idx = (page - 1) * pageSize + i;
        if (idx >= total) break;

        // 根据索引循环选择6种不同的商品数据
        const dataIndex = idx % 6;
        const productTemplate = productData[dataIndex];
        const productTemplate0 = productData0[dataIndex];

        // 添加空值检查，防止数组越界
        if (!productTemplate || !productTemplate0) {
          console.warn(`商品模板数据不存在，索引: ${dataIndex}`);
          continue;
        }

        // 创建商品数据，支持图片数组 - 添加更多的空值检查
        const product = {
          id: idx,
          title: productTemplate.title || '暂无标题',
          trait: productTemplate.trait || '',
          time: productTemplate.time || '',
          // 图片数组，支持多张图片 - 添加空值检查
          imgList: productTemplate.imgList ? [...productTemplate.imgList] : [],
          // 保留单张图片字段作为兼容
          img: (productTemplate.imgList && productTemplate.imgList[0]) || '',
          // 其他商品信息
          price: productTemplate.price || '0元',
          store: productTemplate.store || '',
          supplier: productTemplate.supplier || '',
          sku: productTemplate.sku ? [...productTemplate.sku] : []
        };
        const product0 = {
          id: idx,
          title: productTemplate0.title || '暂无标题',
          trait: productTemplate0.trait || '',
          time: productTemplate0.time || '',
          dates: productTemplate0.dates || '',
          // 图片数组，支持多张图片 - 添加空值检查
          imgList: productTemplate0.imgList ? [...productTemplate0.imgList] : [],
          // 保留单张图片字段作为兼容
          img: (productTemplate0.imgList && productTemplate0.imgList[0]) || '',
          // 其他商品信息
          price: productTemplate0.price || '0元',
          store: productTemplate0.store || '',
          supplier: productTemplate0.supplier || '',
          sku: productTemplate0.sku ? [...productTemplate0.sku] : []
        };
        newList.push(product);
        newList0.push(product0);

      }
      const hasMore = (page * pageSize) < total;
      this.setData({
        productList: isRefresh ? newList : productList.concat(newList),
        productList0: isRefresh ? newList0 : productList0.concat(newList0),
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

    // 添加空值检查
    if (!item) {
      console.error('商品数据为空');
      wx.showToast({
        title: '商品数据异常',
        icon: 'none'
      });
      return;
    }

    // 构建跳转参数 - 添加更多的空值检查
    const params = {
      id: item.id || 0,
      title: encodeURIComponent(item.title || ''),
      time: item.time || '',
      price: item.price || '',
      trait: item.trait || '',
      store: item.store || '',
      supplier: item.supplier || '',
      dates: item.dates || '',
      sku: encodeURIComponent(JSON.stringify(item.sku || []))
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
      url: `../../package/pages/SupplyDetails/SupplyDetails?${urlParams}`,
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


  // 上拉加载
  onReachBottom() {
    if (this.data.hasMore) {
      this.getProductList();
    }
  },



  // 自定义导航
  onMenuTap(e) {
    const id = e.currentTarget.dataset.id;
    if (id === 1) {
      wx.navigateTo({
        url: '../chat/chat',
      })
    } else if (id === 2) {
      wx.navigateTo({
        url: '/pages/select/select',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})