package com.nepaliwebsite.NepaliWebsite.repository;

import com.nepaliwebsite.NepaliWebsite.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "SELECT * FROM product ORDER BY RAND() LIMIT 4", nativeQuery = true)
    List<Product> findPopularProducts();

    @Query(value = "SELECT * FROM product ORDER BY RAND() LIMIT 8", nativeQuery = true)
    List<Product> findNewCollections();
}
