package com.employeeportal.org.model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * Created by Admin on 11/6/2019.
 */
@Document
@Data
public class Employee {

    @Id
    private String id;
    @NotNull
    private String fname;
    @NotNull
    private String lname;
    @NotNull
    private String gender;

    @NotNull
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date dob;

    @NotNull
    private String dept;

    public Employee(){

    }

    public Employee(String id, String fname, String lname, String gender, Date dob, String dept) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.gender = gender;
        this.dob = dob;
        this.dept = dept;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id='" + id + '\'' +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", gender='" + gender + '\'' +
                ", dob=" + dob +
                ", dept='" + dept + '\'' +
                '}';
    }
}
