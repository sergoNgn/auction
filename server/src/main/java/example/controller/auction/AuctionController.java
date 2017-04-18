package example.controller.auction;

import example.model.Product;
import example.model.ProductDetail;
import lombok.Builder;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@RestController
public class AuctionController {

    private List<Product> productList = Product.createProducts();
    private List<ProductDetail> productDetailList = ProductDetail.createDetails();

    @RequestMapping("/api/products")
    public List<Product> getProducts(HttpServletRequest request) {
        List<Product> result = new ArrayList<>(productList);
        String title = request.getParameter("title");
        String price = request.getParameter("price");
        String category = request.getParameter("category");
        if(title != null) {
            result = result.stream().filter(p -> p.getTitle().toLowerCase().contains(title)).collect(Collectors.toList());
        }
        if(price != null && Double.parseDouble(price) > 0) {
            result = result.stream().filter(p -> p.getPrice() >= Double.parseDouble(price)).collect(Collectors.toList());
        }
        return result;
    }

    @RequestMapping("/api/products/{id}")
    public Product getProductById(@PathVariable() Long id) {
        return productList
                .stream()
                .filter(p -> p.getId().equals(id))
                .findAny()
                .orElse(null);
    }

    @RequestMapping("/api/products/review/{id}")
    public List<ProductDetail> getProductDetailByProductId(@PathVariable Long id) {
        return productDetailList
                .stream()
                .filter(p -> p.getProductId().equals(id))
                .collect(Collectors.toList());
    }
}
