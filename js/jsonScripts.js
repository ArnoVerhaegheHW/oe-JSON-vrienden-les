const GetJSON = async (file, keyName = "") => {
      let response = await fetch(file);
      let data = await response.json();
      let dataArray = (keyName == "") ? data : data[keyName];
      return dataArray;
}

const ShowArrayContent = (file, keyName = "") => {
      fetch(file).then(function (resp) {
            return resp.json();
      }).then(function (data) {
            let dataArray = (keyName == "") ? data : data[keyName];
            dataArray.forEach(element => {
                  console.log(element);
            });
      })
}