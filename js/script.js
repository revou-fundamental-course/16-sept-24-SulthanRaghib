function result() {
    // Valisadi input
    if (document.getElementById("nama").value == "") {
      alert("Masukkan Nama");
      document.getElementById("nama").focus();
      return false;
    }

    if (document.getElementById("tanggal-lahir").value == "") {
      alert("Masukkan Tanggal Lahir");
      document.getElementById("tanggal-lahir").focus();
      return false;
    }

    if (
      document.querySelector('input[name="gender"]:checked').value == ""
    ) {
      alert("Pilih Jenis Kelamin");
      document.querySelector('input[name="gender"]:checked').focus();
      return false;
    }

    if (document.getElementById("pesan").value == "") {
      alert("Masukkan Pesan");
      document.getElementById("pesan").focus();
      return false;
    }

    const nama = document.getElementById("nama").value;
    const tglLhr = document.getElementById("tanggal-lahir").value;
    const gender = document.querySelector(
      'input[name="gender"]:checked'
    ).value;
    const pesan = document.getElementById("pesan").value;
    const time = new Date().toLocaleTimeString();
    const date = new Date().toDateString();

    // result
    document.getElementById("result-nama").innerHTML = nama;
    document.getElementById("result-tgl-lhr").innerHTML = tglLhr;
    document.getElementById("result-gender").innerHTML = gender;
    document.getElementById("result-pesan").innerHTML = pesan;
    document.getElementById("time").innerHTML = date + ", " + time;

    // clear input
    document.getElementById("nama").value = "";
    document.getElementById("tanggal-lahir").value = "";
    document.getElementById("pesan").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
  }

