package example.model;

import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@Builder
public class ProductDetail {
    private Long id;
    private Long productId;
    private Float rating;
    private Date timestamp;
    private String comment;
    private String user;


    public static List<ProductDetail> createDetails() {
        List<ProductDetail> res = new ArrayList<>();
        String comment = "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium.";
        res.add(
                ProductDetail
                        .builder()
                        .id(0l)
                        .productId(0l)
                        .timestamp(new Date())
                        .user("User 1")
                        .rating(5f)
                        .comment(comment).build());
        res.add(
                ProductDetail
                        .builder()
                        .id(1l)
                        .productId(0l)
                        .timestamp(new Date())
                        .user("User 1")
                        .rating(5f)
                        .comment(comment).build());
        res.add(
                ProductDetail
                        .builder()
                        .id(0l)
                        .productId(3l)
                        .timestamp(new Date())
                        .user("User 2")
                        .rating(4f)
                        .comment(comment).build());
        res.add(
                ProductDetail
                        .builder()
                        .id(0l)
                        .productId(4l)
                        .timestamp(new Date())
                        .user("User 3")
                        .rating(4f)
                        .comment(comment).build());
        res.add(
                ProductDetail
                        .builder()
                        .id(0l)
                        .productId(4l)
                        .timestamp(new Date())
                        .user("User 3")
                        .rating(5f)
                        .comment(comment).build());
        res.add(
                ProductDetail
                        .builder()
                        .id(0l)
                        .productId(3l)
                        .timestamp(new Date())
                        .user("User 5")
                        .rating(3.4f)
                        .comment(comment).build());
        return res;
    }

}
