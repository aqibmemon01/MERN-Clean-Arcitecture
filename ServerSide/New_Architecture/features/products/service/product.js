class ProductService {
    constructor() {
    }
    getAll(req, res) {
        res.send("Hellow products");
    }
}
export default new ProductService();
