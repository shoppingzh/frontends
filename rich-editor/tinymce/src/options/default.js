import http from '../utils/http'

export default {
  selector: '#editor',
  language: 'zh_CN',
  height: 600,
  plugins: 'lists print fullscreen save image imagetools media table',
  menubar: 'file edit view',
  menu: {
    file: {
      title: '文件',
      items: 'newdocument print'
    }
  },
  toolbar: [
    'fontselect | fontsizeselect | alignleft aligncenter alignright alignjustify | h1 h2 h3 h4 h5 h6 | table fullscreen',
    'bold italic underline strikethrough subscript superscript forecolor backcolor bullist numlist image media'
  ],
  // image_advtab: true, // 配置图片高级选项
  automatic_uploads: true,
  images_upload_handler: (blobinfo, success, failure) => {
    console.log(blobinfo)
    // 此处实现上传逻辑
    // TODO 暂时模拟实现
    console.log(blobinfo.blob())
    
    const formData = new FormData()
    formData.append('image', blobinfo.blob())
    http({
      url: '/image/upload',
      method: 'post',
      data: formData
    }).then((resp) => {
      success(resp.data)
    }).catch((err) => {
      console.log(err)
    })

  }
  // skin: 'oxide-dark', // 配置暗黑皮肤
}
