function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.HOMETEAM = values[0];
    obj.AWAYTEAM = values[1];
    obj.HSCORE = values[2];
    obj.ASCORE = values[3];   
    var jsonString = JSON.stringify(obj);
    return jsonString;
   }