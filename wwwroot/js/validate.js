function validateForm(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    var name = document.getElementById("Name").value;
    var phone = document.getElementById("Phone").value;

    if (name === "" || phone === "") {
        Swal.fire({
            icon: 'error',
            title: 'Các bạn phải điền đầy đủ các trường thông tin',
            text: 'Hẹn gặp lại!',
        });
        return false;
    }

    if (name.length < 3) {
        alert("Họ tên phải chứa ít nhất 3 ký tự!");
        return false;
    }

    if (phone.length < 10) {
        alert("Số điện thoại phải chứa ít nhất 10 ký tự!");
        return false;
    }

    Swal.fire(
        'Bạn đã thêm thành công',
        'Xin chúc mừng',
        'success'
    );

    // Tiến hành submit form bằng AJAX hoặc các xử lý khác
    // ...

    return true; // Submit form nếu thông tin hợp lệ
}