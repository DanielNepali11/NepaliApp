package com.nepaliwebsite.NepaliWebsite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotNull
    private String name;

    @NotNull
    private String category;
    @NotNull
    private String image;
    @NotNull
    private Long new_price;
    @NotNull
    private Long old_price;

    public Product() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Long getNew_price() {
        return new_price;
    }

    public void setNew_price(Long new_price) {
        this.new_price = new_price;
    }

    public Long getOld_price() {
        return old_price;
    }

    public void setOld_price(Long old_price) {
        this.old_price = old_price;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", category='" + category + '\'' +
                ", image='" + image + '\'' +
                ", new_price=" + new_price +
                ", old_price=" + old_price +
                '}';
    }
}
