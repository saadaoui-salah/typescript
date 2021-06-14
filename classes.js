var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age, email) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User " + this.name + " created");
    }
    // private / protected
    User.prototype.regitser = function () {
        console.log(this.name + " is registred");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " is in premium plan");
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, groupe, name, age, email) {
        var _this = _super.call(this, name, age, email) || this;
        _this.id = id;
        _this.groupe = groupe;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        this.groupe = "premium";
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var user = new User("Salah", 21, "email@example.com");
console.log(user.name);
user.regitser();
var memeber = new Member(1, "free", "Saadaoui", 21, "Saadaoui@example.com");
memeber.regitser();
memeber.payInvoice();
