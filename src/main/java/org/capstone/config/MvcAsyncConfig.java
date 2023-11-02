package org.capstone.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.AsyncSupportConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcAsyncConfig implements WebMvcConfigurer {
    // Defined the time allowed when using Async.
    @Override
    public void configureAsyncSupport(AsyncSupportConfigurer configurer) {
        long timeout = 100 * 60 * 1000;
        configurer.setDefaultTimeout(timeout);
    }
}

