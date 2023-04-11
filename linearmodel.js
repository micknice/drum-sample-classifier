// class creation//
class linearModel {
    constructor() {
        this.m = [];
        this.c = 0;
    }
    
    //multiplies input vector by class vector. inputs vector and true/false normalize//
    dotProduct(x, shouldNormalize) {
        if (shouldNormalize === true) {
            const xNorm = this.normalize(x);
            const mNorm = this.normalize(this.m);
            // console.log(xNorm, mNorm, this.getl2norm(xNorm), this.getl2norm(mNorm))
            let dot = 0;
            for (let i = 0; i < xNorm.length; i++ ) {
                dot += (mNorm[i] * xNorm[i]);        
            }   
            return dot;
        }            
        let dot = this.c;
        for (let i = 0; i < x.length; i++ ) {
           dot += (this.m[i] * x[i]);        
        }   
        return dot;    
    }
    
    // gets l2 norm
    getl2norm(norm) {
        let total = 0;
        for (let i = 0; i < norm.length; i++) {
            total += norm[i] * norm[i];    
        }
        return Math.sqrt(total);
    }
    
    // normalizer
    normalize(a) {
        const l2 = this.getl2norm(a);
        let newVector = [];
        for (let i = 0; i < a.length; i++) {
            newVector.push(a[i] / l2);
        }
    return newVector;       
    }
}


module.exports = linearModel;


