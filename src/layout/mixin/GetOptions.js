export const myMixin = {
  methods: {
  },
  computed: {
    mediaTypeoptions() { // 生成媒体/数据类型的选择列表
      // const that = this
      // let type = that.attributionTypeoptions.find(item => {
      //   return item.label == that.attributionType
      // })
      // if (type && type.mediaTypeoptions) {
      //   // if (!that.initSelect) {
      //     that.mediaType = ""
      //     // if(that.mediaType == ''){
      //     //   if(!type.mediaTypeoptions.some( item => {
      //     //     item.label == that.mediaType
      //     //   })){
      //       // if(that.resourceType != "网站")
      //       //   that.mediaType = type.mediaTypeoptions[0].label
      //     //   }
      //     // }
      //   // }
      //   return type.mediaTypeoptions
      // } else {
      //   return []
      // }

      let mediaTypeoptions = [
        {
          label: "众包",
          value: "众包",
        },
        {
          label: "热点",
          value: "热点",
        },
      ]
      return mediaTypeoptions
    },
  },
}