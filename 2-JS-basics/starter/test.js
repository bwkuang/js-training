var MyConstructor = function(field1, field2){
        this.field1 = field1;
        this.field2 = field2;
        this.applyInheritedMethod = function(){ console.log(field1); }
}

var oneInstance = new MyConstructor("hello", "world");
oneInstance.applyInheritedMethod();


MyConstructor.prototype.applyAttachedMethod = function() { console.log(this.field2); }
oneInstance.applyAttachedMethod();

MyConstructor.prototype.attachedField = 'This field is attached';
console.log(oneInstance.attachedField);

