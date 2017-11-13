package com.seeyou.cu.VO;

public class DataVO {
	
	private String id;
	private String html;
	
	public DataVO(String id, String html) {
		super();
		this.id = id;
		this.html = html;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getHtml() {
		return html;
	}

	public void setHtml(String html) {
		this.html = html;
	}

	@Override
	public String toString() {
		return "DataVO [id=" + id + ", html=" + html + "]";
	}
	
	

}
