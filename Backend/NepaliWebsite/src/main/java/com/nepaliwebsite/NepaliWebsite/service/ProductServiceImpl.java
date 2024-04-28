package com.nepaliwebsite.NepaliWebsite.service;

import com.nepaliwebsite.NepaliWebsite.exception.ResourceNotFoundException;
import com.nepaliwebsite.NepaliWebsite.model.Product;
import com.nepaliwebsite.NepaliWebsite.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;


    @Override
    public void saveProduct(Product product) {
        if (product.getId() != null) {
            throw new IllegalArgumentException("Please do not assign the ID");
        } else {
            productRepository.save(product);
        }
    }


    @Override
    public void saveListProducts(List<Product> products) {
        productRepository.saveAll(products);
    }

    @Override
    public Optional<Product> getUserById(Integer id) {
        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isPresent()) {
            return Optional.of(productOptional.get());
        } else {
            throw new ResourceNotFoundException("Product not found with id: " + id);
        }
    }

    @Override
    public List<Product> getPopularProducts() {
        return productRepository.findPopularProducts();
    }

    @Override
    public List<Product> getNewCollections() {
        return productRepository.findNewCollections();
    }
}
