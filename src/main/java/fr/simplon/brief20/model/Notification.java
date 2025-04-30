package fr.simplon.brief20.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    private User user;

    private String message;
    @Builder.Default
    private boolean read = false;
    private LocalDateTime createdAt;
    private LocalDateTime sentAt;

    @Enumerated(EnumType.STRING)
    private Type type;

    public enum Type {
        CUSTOMER_ASSIGNED, MEETING_SCHEDULED, DOCUMENT_UPLOADED, OTHER
    }
}
