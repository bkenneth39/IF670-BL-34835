<form method="POST" action="insert_new_memory.php" enctype="multipart/form-data">
    <table>
        <tr><th colspan="2">Tambah Data Memori</th></tr>
        <tr><td>ID</td> <td><input type="text" name="id"></td> </tr>
        <tr><td>Title</td> <td><input type="text" name="title"></td> </tr>
        <tr><td>Type</td> <td><input type="text" name="type"></td> </tr>
        <tr><td>lat</td> <td><input type="text" name="lat"></td> </tr>
        <tr><td>lng</td> <td><input type="text" name="lng"></td> </tr>
        <tr><td>FOTO</td> <td><input type="file" name="foto"></td> </tr>
        <tr><td colspan="2"><input type="submit" name="submit" value="Submit"></td> </tr>
    </table>
</form>