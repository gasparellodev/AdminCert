import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import QuillEditor from '../../QuillEditor';

const categoryOptions = [
  {
    label: '2º Via de Certidão de Nascimento',
    value: 'Shirts'
  },
  {
    value: 'Phones',
    label: '2º Via de Certidão de Casamento'
  },
  {
    value: 'Cars',
    label: '2º Via de Certidão de Óbito'
  },
  {
    value: 'Cars',
    label: 'Certidão de Inteiro Teor de Nascimento'
  },
  {
    value: 'Cars',
    label: 'Certidão de Inteiro Teor de Casamento'
  },
  {
    value: 'Cars',
    label: 'Certidão de Inteiro Teor de Óbito'
  },
  {
    value: 'Cars',
    label: 'Certidão de Imóvel'
  },
  {
    value: 'Cars',
    label: 'Certidão de Protesto'
  },
];
const categoryOptions1 = [
  {
    label: 'Anterior a 1977',
    value: 'Shirts'
  },
  {
    value: 'Shirt',
    label: 'Estados (BA - RJ - PI)'
  },
  {
    value: 'Shirts',
    label: 'Estados (PA)'
  },
  {
    value: 'Shirts',
    label: 'Emissão Reprográfica'
  },
  {
    value: 'Shirts',
    label: 'Emissão Digitada'
  },
  {
    value: 'Shirts',
    label: 'Emissão Reprográfica + Digitada'
  },
  {
    value: 'Shirts',
    label: 'Emissão Reprográfica + Digitada - Estados (SC, RS, PR, SP, DF)'
  },
  {
    value: 'Shirts',
    label: 'Emissão Reprográfica - Estados (PA)'
  },
  {
    value: 'Shirts',
    label: 'Emissão Digitada - Estados (PA)'
  },
  {
    value: 'Shirts',
    label: 'Emissão Reprográfica + Digitada - Estados (PA)'
  },
  {
    value: 'Shirts',
    label: 'Apostilamento de Haia p/ 2ª Via, Digitada OU Reprográfica'
  },
  {
    value: 'Shirts',
    label: 'Apostilamento de Haia p/ Digitada + Reprográfica'
  },
];

const ProductCreateForm = (props) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        category: '',
        description: '',
        images: [],
        includesTaxes: false,
        isTaxable: false,
        name: '',
        price: '',
        productCode: '',
        productSku: '',
        salePrice: '',
        submit: null
      }}
      validationSchema={Yup
        .object()
        .shape({
          category: Yup.string().max(255),
          description: Yup.string().max(5000),
          images: Yup.array(),
          includesTaxes: Yup.bool().required(),
          isTaxable: Yup.bool().required(),
          name: Yup.string().max(255).required(),
          price: Yup.number().min(0).required(),
          productCode: Yup.string().max(255),
          productSku: Yup.string().max(255),
          salePrice: Yup.number().min(0)
        })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // NOTE: Make API request
          setStatus({ success: true });
          setSubmitting(false);
          toast.success('Product created!');
          navigate('/dashboard/products');
        } catch (err) {
          console.error(err);
          toast.error('Something went wrong!');
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        touched,
        values
      }) => (
        <form
          onSubmit={handleSubmit}
          {...props}
        >
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <Card>
                <CardContent>
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Nome do Produto"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    variant="outlined"
                  />
                  <Typography
                    color="textSecondary"
                    sx={{
                      mb: 2,
                      mt: 3
                    }}
                    variant="subtitle2"
                  >
                    Descrição Curta
                  </Typography>
                  <QuillEditor
                    onChange={(value) => setFieldValue('description', value)}
                    placeholder="Write something"
                    sx={{ height: 200 }}
                    value={values.description}
                  />
                  {(touched.description && errors.description) && (
                    <Box sx={{ mt: 2 }}>
                      <FormHelperText error>
                        {errors.description}
                      </FormHelperText>
                    </Box>
                  )}
                </CardContent>
              </Card>
              <Box sx={{ mt: 3 }}>
                <Card>
                  <CardHeader title="Valores" />
                  <CardContent>
                    <Grid
                      container
                      spacing={3}
                    >
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          error={Boolean(touched.price && errors.price)}
                          fullWidth
                          helperText={touched.price && errors.price
                            ? errors.price
                            : 'If you have a sale price this will be shown as old price'}
                          label="Valor do Produto"
                          name="price"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="number"
                          value={values.price}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          error={Boolean(touched.salePrice && errors.salePrice)}
                          fullWidth
                          helperText={touched.salePrice && errors.salePrice}
                          label="Valor em Promoção"
                          name="salePrice"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="number"
                          value={values.salePrice}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <Box sx={{ mt: 2 }}>
                      <FormControlLabel
                        control={(
                          <Checkbox
                            checked={values.isTaxable}
                            color="primary"
                            name="isTaxable"
                            onChange={handleChange}
                            value={values.isTaxable}
                          />
                        )}
                        label="Produto possui variação"
                      />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <FormControlLabel
                        control={(
                          <Checkbox
                            checked={values.includesTaxes}
                            color="primary"
                            name="includesTaxes"
                            onChange={handleChange}
                            value={values.includesTaxes}
                          />
                        )}
                        label="Produto variável por Estado"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <Card>
                <CardHeader title="Variações" />
                <CardContent>
                  <TextField
                    fullWidth
                    label="Produto"
                    name="category"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    value={values.category}
                    variant="outlined"
                  >
                    {categoryOptions.map((category) => (
                      <option
                        key={category.value}
                        value={category.value}
                      >
                        {category.label}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    label="Variações do Produto"
                    name="category"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    value={values.category}
                    variant="outlined"
                  >
                    {categoryOptions1.map((category) => (
                      <option
                        key={category.value}
                        value={category.value}
                      >
                        {category.label}
                      </option>
                    ))}
                  </TextField>
                  <Box sx={{ mt: 2 }}>
                    <TextField
                      error={Boolean(touched.productSku && errors.productSku)}
                      fullWidth
                      helperText={touched.productSku && errors.productSku}
                      label="SKU do Produto"
                      name="productSku"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.productSku}
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
              </Card>
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>
                    {errors.submit}
                  </FormHelperText>
                </Box>
              )}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  mt: 3
                }}
              >
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Create Product
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default ProductCreateForm;
