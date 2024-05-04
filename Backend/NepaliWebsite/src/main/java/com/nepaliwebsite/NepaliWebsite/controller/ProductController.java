package com.nepaliwebsite.NepaliWebsite.controller;

import com.nepaliwebsite.NepaliWebsite.model.Product;
import com.nepaliwebsite.NepaliWebsite.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping(path = "/add")
    public String saveProduct(@RequestBody Product product) {
        productService.saveProduct(product);
        return "Product has been added";
    }

    @PostMapping(path = "/addProducts")
    public String saveListProducts(@RequestBody List<Product> products) {
        productService.saveListProducts(products);
        return "All products has been added";
    }

    @GetMapping(path="/{id}")
    public Optional<Product> getProductById(@PathVariable Integer id){
        return productService.getUserById(id);
    }

    @GetMapping(path="/popular")
    public List<Product> getPopularProducts(){
        return productService.getPopularProducts();
    }

    @GetMapping(path="/newCollections")
    public List<Product> getNewCollections(){
        return productService.getNewCollections();
    }

    @GetMapping(path = "/category/{category}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String category){
        return productService.getByCategory(category);
    }
}
