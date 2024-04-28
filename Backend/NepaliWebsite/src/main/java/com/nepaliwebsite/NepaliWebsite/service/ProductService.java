package com.nepaliwebsite.NepaliWebsite.service;

import com.nepaliwebsite.NepaliWebsite.model.Product;
import org.springframework.security.core.parameters.P;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    public void saveProduct(Product product);

    public void saveListProducts(List<Product> products);

    public Optional<Product> getUserById(Integer id);

    public List<Product> getPopularProducts();

    public List<Product> getNewCollections();
}
