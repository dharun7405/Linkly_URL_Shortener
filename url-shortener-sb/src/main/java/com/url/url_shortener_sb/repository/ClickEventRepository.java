package com.url.url_shortener_sb.repository;

import com.url.url_shortener_sb.models.ClickEvent;
import com.url.url_shortener_sb.models.UrlMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ClickEventRepository extends JpaRepository<ClickEvent,Long> {
    List<ClickEvent> findByUrlMappingAndClickDateBetween(UrlMapping mapping,
                                                         LocalDateTime startDate,
                                                         LocalDateTime endDate);
    List<ClickEvent> findByUrlMappingInAndClickDateBetween(List<UrlMapping> urlMapping,
                                                           LocalDateTime startDate,
                                                           LocalDateTime endDate);
}
