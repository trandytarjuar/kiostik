<script>
    
    $("#member").DataTable({

    });
    // createpenulis = async () =>{
    //     let base_url = "<?= base_url()?>";
    //     let data = new FormData();
    //     var penulis = $("#nama_penulis").val();
    //     alert(penulis)

    //     data.append('nama_penulis',penulis);
    //     await $.ajax({
    //         type:"POST",
    //         url : `<?= base_url("")?>`,

    //     })

    //     alert(penulis)
    // }

    $("#createpenulis").click(function(){
        let base_url = "<?= base_url()?>";
        let data = new FormData();
        var penulis = $("#nama_penulis").val();

        data.append("penulis",penulis)
        $.ajax({
            type:"POST",
            url : `${base_url}/penulis/save`,
            cache: false,
            contentType: false,
            processData: false,
            data: data,
            success: function(data){
                setInterval(function() {
                    location.href = `${base_url}/penulis/`;
                }, 2000);

            }
        })
        // alert(penulis)
    })
    $("#editpenulis").click(function(){
        let base_url = "<?= base_url()?>";
        let data = new FormData();
        var id = $("#id_penulis").val();
        var penulis = $("#nama_penulis").val();
        // alert(penulis)

        data.append("penulis",penulis)
        data.append("id",id)
        $.ajax({
            type:"POST",
            url : `${base_url}/penulis/update`,
            cache: false,
            contentType: false,
            processData: false,
            data: data,
            success: function(res){
                console.log(res)
                // setInterval(function() {
                //     location.href = `${base_url}/penulis/`;
                // }, 2000);

            }
        })
        // alert(penulis)
    })
</script>