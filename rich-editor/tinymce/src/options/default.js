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
  images_upload_handler: (blob, success, failure) => {
    console.log(blob)
    // 此处实现上传逻辑
    // TODO 暂时模拟实现
    setTimeout(() => {
      success('https://cdn2.codefund.app/Ysqgpoar4zZH7Ap1XkkhmKaY')
    }, 2000);
  }
  // skin: 'oxide-dark', // 配置暗黑皮肤
}
