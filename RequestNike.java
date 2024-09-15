package com.example.nikee.model;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Entity;




@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="signinnike")
public class RequestNike {


    @Id
    private String email;
    private String firstname;
    private String lastname;
    private String password;
    private String dob; // You can also use LocalDate for more accurate date handling

    // Getter and Setter for email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Getter and Setter for firstName

    // Getter and Setter for password
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // Getter and Setter for dob (date of birth)
    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }


}
