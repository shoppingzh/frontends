import http from '../utils/http'

function uploadFile(file, success, failure) {
  const formData = new FormData()
  formData.append('file', file, file.name)
  http({
    url: '/file/upload',
    method: 'POST',
    data: formData
  }).then((resp) => {
    success(resp.data)
  }).catch((err) => {
    failure(err)
  })
}

export default {
  selector: '#editor',
  language: 'zh_CN',
  height: 600,
  plugins: 'lists print fullscreen save image imagetools media table link autolink advlist lists checklist preview',
  menubar: 'file edit view',
  menu: {
    file: {
      title: '文件',
      items: 'newdocument print'
    }
  },
  toolbar: [
    'fontselect | fontsizeselect | alignleft aligncenter alignright alignjustify | h1 h2 h3 h4 h5 h6 | preview',
    'bold italic underline strikethrough subscript superscript forecolor backcolor | bullist numlist checklist | image media link table fullscreen'
  ],
  // image_advtab: true, // 配置图片高级选项
  automatic_uploads: true,
  file_picker_types: 'file image media',
  // 图片上传
  images_upload_handler: (blobinfo, success, failure) => {
    uploadFile(blobinfo.blob(), function(data){
      success(data.url)
    }, function(err){
      failure('上传失败：' + err)
    })
  },
  file_picker_callback: function(callback, value, meta){
    const filetype = meta.filetype
    console.log(filetype)
    const fileselect = document.createElement('input')
    fileselect.setAttribute('type', 'file')
    if (filetype === 'image' || filetype === 'media') {
      fileselect.setAttribute('accept', `${filetype === 'image' ? 'image' : 'video'}/*`)
    }
    fileselect.onchange = function() {
      const file = this.files[0]
      uploadFile(file, function(data){
        callback(data.url, {
          title: data.name
        })
      }, function(){

      })
    }
    fileselect.click()
  }
  // skin: 'oxide-dark', // 配置暗黑皮肤
}
