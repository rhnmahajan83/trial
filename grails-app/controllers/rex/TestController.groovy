package rex

import grails.converters.JSON

class TestController {

    def index() {
        def FirstName = "Rohan"
        def LastName = "Mahajan"
        def resp = [fname:FirstName, lname:LastName, age:18]
        render resp as JSON

    }
}
