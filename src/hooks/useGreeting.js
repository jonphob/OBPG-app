export const useGreeting = () => {
  const time = parseInt(`${new Date().getHours()}`);
     
    let greetingText
    
    if (time < 12){
        greetingText = 'Good Morning'
        return greetingText;
    } else if(time < 18){
        greetingText ='Good Afternoon'
        return greetingText;
    } else {
        greetingText ='Good Evening'
        return greetingText;
    }
  };
