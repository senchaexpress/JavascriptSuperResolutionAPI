Ext.define('superRes.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  items: [
    {
      xtype: 'component',
      html: '<h1>Sencha Ext JS Super Resolution Images App Using DeepAI.org</h1>'
    },
    {
      xtype: 'textfield',
      label: 'Enter Source Image URL',
      value: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Tulipa_orphanidea_060506.jpg/260px-Tulipa_orphanidea_060506.jpg',
      reference: 'srcImgUrl'
    },
    {
      xtype: 'image',
      title: 'Source Image',
      reference: 'srcImg',
      width: 100,
      height: 100,
    }, 
    {
      xtype: 'button',
      text: 'Upscale Image',
      handler: 'onUpscaleImg'
    },
    {
      xtype: 'textfield',
      label: 'Output Image URL',
      reference: 'outputUrl',
      readOnly: 'true'
    },
    {
      xtype: 'image',
      label: 'Output Image',
      reference: 'outputImg',
      width: 400,
      height: 400,
    }     
  ],
   defaults: {
      flex: 3,
      margin: 10
  }
})

