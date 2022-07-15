const RelativeFormatter = new Intl.RelativeTimeFormat('pt-BR', { style: 'long' });

export const DateService = {
    differenceDate(date){
        const dateNow = new Date().getTime();
        let dateTweet = new Date(date).getTime();
        let difference = dateNow - dateTweet;
        let type = '';

        if(difference < (1000*60)){
            difference = Math.round(difference / 1000);
            type = 'seconds';
        }else if(difference < (1000*60*60)){
            difference = Math.round(difference / 1000/60 );
            type = 'minutes';
        }else if(difference < (1000*60*60*24)){
            difference = Math.round(difference / 1000/60/60);
            type = 'hours';
        }else if(difference < (1000*60*60*24*30)){
            difference = Math.round(difference / 1000/60/60/24);
            type = 'days';
        }else if(difference < (1000*60*60*24*30*12)){
            difference = Math.round(difference / 1000/60/60/24/30);
            type = 'months';
        }else if(difference > (1000*60*60*24*30*12)){
            difference = Math.round(difference / 1000/60/60/24/30/12);
            type = 'years';
        }

        return { difference, type }
    },
    relativeTime(date){
        const { difference, type } = this.differenceDate(date);
        return RelativeFormatter.format(-difference, type);
    }
}