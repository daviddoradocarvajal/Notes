package com.indra.notes.cfg;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

@ComponentScan(basePackages  = "com.indra.notes.controller")
@Configuration
public class MVCConfiguration {	
	
	@Bean
	public ViewResolver viewResolver() {		
		InternalResourceViewResolver vr = new InternalResourceViewResolver();
		vr.setPrefix("/view/");
		vr.setSuffix(".jsp");
		vr.setViewClass(JstlView.class);
		return vr;
	}
}
