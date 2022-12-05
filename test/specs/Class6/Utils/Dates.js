const moment = require("moment");

class Dates {

    static getCurrentDate() {
        const now = moment();
        return now.format('D');
    }

    static getCurrentMonth() {
        const now = moment();
        return now.format('MMM');
    }

    static getCurrentYear() {
        const now = moment();
        return now.format('YYYY');
    }

    static particularDateFormat() {
        const now = moment();
        return now.format('MMM D YYYY');
    }

}
module.exports = Dates;