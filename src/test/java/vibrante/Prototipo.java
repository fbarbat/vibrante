package vibrante;

import org.junit.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import vibrante.model.DibujadorCuadro;
import vibrante.model.GeneradorCuadro;
import vibrante.model.Painting;

import java.io.IOException;

/**
 * Created by Fernando on 3/4/2016.
 */


public class Prototipo {

    @Test
    public void test() throws IOException {
        GeneradorCuadro generadorCuadro = new GeneradorCuadro();
        Painting cuadro = generadorCuadro.crear();
        DibujadorCuadro dibujadorCuadro = new DibujadorCuadro();
        dibujadorCuadro.guardar(cuadro);
    }

}
