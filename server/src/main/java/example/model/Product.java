package example.model;

import lombok.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;


@Getter
@Setter
@ToString
@AllArgsConstructor
@Builder
public class Product {
    private Long id;
    private Double rating;
    private String title;
    private String description;
    private List<String> categories;
    private Double price;

    public static List<Product> createProducts() {
        List<Product> res = new ArrayList<>();
        res.add(
                Product.builder()
                        .id(0l)
                        .title("First Product")
                        .price(24.99)
                        .rating(4.3)
                        .description("This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
                        .categories(Arrays.asList("electronics", "hardware")).build());
        res.add(
                Product.builder()
                        .id(1l)
                        .title("Second Product")
                        .price(64.99)
                        .rating(3.3)
                        .description("This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
                        .categories(Arrays.asList("books")).build());
        res.add(
                Product.builder()
                        .id(2l)
                        .title("Third Product")
                        .price(74.99)
                        .rating(4.2)
                        .description("This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
                        .categories(Arrays.asList("electronics")).build());
        res.add(
                Product.builder()
                        .id(3l)
                        .title("Fourth Product")
                        .price(84.99)
                        .rating(3.9)
                        .description("This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
                        .categories(Arrays.asList("hardware")).build());
        res.add(
                Product.builder()
                        .id(4l)
                        .title("Fifth Product")
                        .price(94.99)
                        .rating(5d)
                        .description("This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
                        .categories(Arrays.asList("electronics", "hardware")).build());
        res.add(
                Product.builder()
                        .id(5l)
                        .title("Sixth Product")
                        .price(54.99)
                        .rating(4.6)
                        .description("This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
                        .categories(Arrays.asList("books")).build());
        return res;
    }
}
