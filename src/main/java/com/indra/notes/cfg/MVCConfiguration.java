package com.indra.notes.cfg;

import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

public class MVCConfiguration {	
	
	@Bean
	public ViewResolver viewResolver() {		
		InternalResourceViewResolver vr = new InternalResourceViewResolver();		
		return vr;
	}
}
