Ext.define('superRes.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

  onUpscaleImg: function (button) {
    srcImgUrl = this.lookupReference('srcImgUrl').getValue();
    //clear the output url and image
    this.lookupReference('outputUrl').setValue(" ");
    this.lookupReference('outputImg').setSrc("");
    //display the input image
  	this.lookupReference('srcImg').setSrc(srcImgUrl);
  	//call the super resolution API
  	this.callSuperResolutionAPI(srcImgUrl);

  },

  callSuperResolutionAPI: async function (srcImgUrl) {
  	try{
	  	//replace with your API key
		deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');
		//call the super resolution API
		 var resp = await deepai.callStandardApi("torch-srgan", {
	            image: srcImgUrl,
	    });
	    console.log(`Resposne:${JSON.stringify(resp)}`);
	    outputUrl = resp.output_url;
	    this.lookupReference('outputUrl').setValue(outputUrl);
	    this.lookupReference('outputImg').setSrc(outputUrl);

	}
	catch(err) {alert(err);}
  }
})
