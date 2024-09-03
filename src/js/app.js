
export default class Team {
    [Symbol.iterator](){
        let listOfChars = Object.getOwnPropertyNames(this);
        let counter = 0;
        return {
            next(){
                if (counter < listOfChars.length) {
                    return {
                        done: false,
                        value: listOfChars[counter++]
                    };
                }
                return {
                    done: true
                };
            }

        }
    }
}

