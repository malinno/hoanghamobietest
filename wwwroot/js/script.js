//var Save = function () {
//    if (!$("#frmCustomer").valid()) {
//        return;
//    }

//    var _frmNguyenLieu = $("#frmCustomer").serialize();
//    $("#btnSave").val("Vui lòng chờ");
//    $('#btnSave').attr('disabled', 'disabled');
//    $.ajax({
//        type: "POST",
//        url: "/NguyenLieu/AddEdit",
//        data: _frmNguyenLieu,
//        success: function (result) {
//            Swal.fire({
//                title: result,
//                icon: "success"
//            }).then(function () {
//                document.getElementById("btnClose").click();
//                $("#btnSave").val("Lưu");
//                $('#btnSave').removeAttr('disabled');
//                $('#tblNguyenLieu').DataTable().ajax.reload();
//            });
//        },
//        error: function (errormessage) {
//            SwalSimpleAlert(errormessage.responseText, "warning");
//        }
//    });
//}
