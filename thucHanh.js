//khai báo hàm khởi tạo tham số radius
let Circle = function (color, radius) {
    this.color = color;
    this.radius = radius;
    //phương thức trả về
    this.getColor = function () {
        return this.color;
    };
    this.getRadius = function () {
        return this.radius;
    };
    //phương thức thay thiết lập giá trị
    this.setRadius = function (radius) {
        this.radius = radius;
    }
    this.setColor = function (color) {
        this.color = color;
    }

    this.getArea = function () {
        return Math.PI * this.radius * this.radius;
    }


};
// Circle là một đối tượng tự định nghĩa được khởi tạo
// bằng từ khóa new
let circle = new Circle('#737373', 5);
circle.setRadius(3);
circle.setColor('#ffffff');
console.log(circle.getArea());
console.log(circle.getRadius());
console.log(circle.getColor());