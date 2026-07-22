const material = ['いち', 'にー', 'なな', 'さん', 'よん'];
index = material.indexOf('なな');
material.splice(index, 1);
console.log(material);
material.splice(-2);
console.log(material);
