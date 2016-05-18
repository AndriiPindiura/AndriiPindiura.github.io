var names = [5];
for (var i = 0; i < 5; i++)
{
    names[i] = prompt('Input name ' + (i + 1) + ': ');
}

var userName = prompt("Input username: ");

if (!compareNames(userName)) {
    alert("Error!\nUser not found");
}

function compareNames(name) {
    for (var i = 0, l = names.length; i < l; i++)
    {
       if (names[i] == name)
       {
           alert(name + ', вы успешно вошли');
           return true;
       }
    }
    return false;
}