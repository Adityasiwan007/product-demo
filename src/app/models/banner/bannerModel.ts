export class BannerModel {
    // userId:Number;
    // id:Number;
    // title:String;
    // completed:boolean;

    
        status:String;
        message: String;
        data: {
            banners:[
                {
                    event_id: String,
                    event_name: String,
                    influencer_id: String,
                    influencer_name: String,
                    streaming_url:String
                    product_images: String[]
                    
                }
            ]
        };
        error: String;
}
