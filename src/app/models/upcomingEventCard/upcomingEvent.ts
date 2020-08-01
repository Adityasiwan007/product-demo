export class UpcomingModel {
    
        status:String;
        message: String;
        data: {
            upcomingEvents: [
                {
                    event_id: String,
                    event_name: String,
                    influencer_id: String,
                    influencer_name: String,
                    streaming_url: String,
                    from_time: String,
                    to_time: String,
                    product_images: String[]
                }
            ]
        };
        error: String;
}
