const moment = require("moment");

class Dates {

    static getCurrentDate() {
        const now = moment();
        return now.format('D');
    }

    static getCurrentMonthNameInShort() {
        const now = moment();
        return now.format('MMM');
    }

    static getCurrentYearNameInShort() {
        const now = moment();
        return now.format('YYYY');
    }

    static particularDateFormat() {
        const now = moment();
        return now.format('MMM D YYYY');
    }

}
module.exports = Dates;