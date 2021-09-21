import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const COL1_WIDTH = 60;
const COLN_WIDTH = (100 - COL1_WIDTH) / 2;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 24
  },
  h4: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.235
  },
  h6: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.6
  },
  subtitle2: {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 1.57
  },
  body2: {
    fontSize: 10,
    lineHeight: 1.43
  },
  gutterBottom: {
    marginBottom: 4
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  brand: {
    height: 32,
    width: 32
  },
  company: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32
  },
  references: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32
  },
  billing: {
    marginTop: 32
  },
  items: {
    marginTop: 32
  },
  notes: {
    marginTop: 32
  },
  table: {
    display: 'flex',
    width: 'auto'
  },
  tableHeader: {},
  tableBody: {},
  tableRow: {
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    borderStyle: 'solid',
    flexDirection: 'row'
  },
  tableCell1: {
    padding: 6,
    width: `${COL1_WIDTH}%`
  },
  tableCellN: {
    padding: 6,
    width: `${COLN_WIDTH}%`
  },
  alignRight: {
    textAlign: 'right'
  }
});

const InvoicePDF = (props) => {
  const { invoice } = props;

  return (
    <Document>
      <Page
        size="A4"
        style={styles.page}
      >
        <View style={styles.header}>
          <View>
            <Image
              source="/static/favicon (1).png"
              style={styles.brand}
            />
            <Text style={styles.h6}>
              www.admincert.com.br
            </Text>
          </View>
          <View>
            <Text style={styles.h4}>
              {invoice.status}
            </Text>
            <Text style={styles.subtitle2}>
              IPedido Teste #000001
            </Text>
          </View>
        </View>
        <View style={styles.company}>
          <View>
            <Text style={styles.body2}>
              Rua Teste
            </Text>
            <Text style={styles.body2}>
              Number Teste
            </Text>
            <Text style={styles.body2}>
              Brasil
            </Text>
          </View>
          <View>
            <Text style={styles.body2}>
              BRWORKS
            </Text>
            <Text style={styles.body2}>
              cnpj teste
            </Text>
          </View>
          <View>
            <Text style={styles.body2}>
              teste@teste.com.br
            </Text>
            <Text style={styles.body2}>
              11 1111-1111
            </Text>
          </View>
        </View>
        <View style={styles.references}>
          <View>
            <Text style={[styles.subtitle2, styles.gutterBottom]}>
              Data do Pedido
            </Text>
            <Text style={styles.body2}>
              {format(invoice.dueDate, 'dd MMM yyyy')}
            </Text>
          </View>
          <View>
            <Text style={[styles.subtitle2, styles.gutterBottom]}>
              Data de saída
            </Text>
            <Text style={styles.body2}>
              {format(invoice.issueDate, 'dd MMM yyyy')}
            </Text>
          </View>
          <View>
            <Text style={[styles.subtitle2, styles.gutterBottom]}>
              Id do Pedido
            </Text>
            <Text style={styles.body2}>
              #00001
            </Text>
          </View>
        </View>
        <View style={styles.billing}>
          <Text style={[styles.subtitle2, styles.gutterBottom]}>
            Cobrança em nome de
          </Text>
          <Text style={styles.body2}>
            Matheus Bavaresco
          </Text>
          <Text style={styles.body2}>
            Teste
          </Text>
          <Text style={styles.body2}>
            Teste
          </Text>
          <Text style={styles.body2}>
            Teste
          </Text>
        </View>
        <View style={styles.items}>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.h6}>
                    Descrição
                  </Text>
                </View>
                <View style={styles.tableCellN} />
                <View style={styles.tableCellN}>
                  <Text style={[styles.h6, styles.alignRight]}>
                    Valor unitário
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.tableBody}>
              {invoice.items.map((item) => (
                <View
                  style={styles.tableRow}
                  key={item.id}
                >
                  <View style={styles.tableCell1}>
                    <Text style={styles.body2}>
                      Certidão de Teste
                    </Text>
                  </View>
                  <View style={styles.tableCellN} />
                  <View style={styles.tableCellN}>
                    <Text style={[styles.body2, styles.alignRight]}>
                      {numeral(item.unitAmount)
                        .format(`${item.currency}0,0.00`)}
                    </Text>
                  </View>
                </View>
              ))}
              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={styles.body2}>
                    Subtotal
                  </Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>
                    {numeral(invoice.subtotalAmount)
                      .format(`${invoice.currency}0,0.00`)}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={styles.body2}>
                    Taxas
                  </Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>
                    {numeral(invoice.taxAmount)
                      .format(`${invoice.currency}0,0.00`)}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={styles.body2}>
                    Total
                  </Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>
                    {numeral(invoice.totalAmount)
                      .format(`${invoice.currency}0,0.00`)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.notes}>
          <Text style={[styles.h6, styles.gutterBottom]}>
            Notas
          </Text>
          <Text style={styles.body2}>
            Ao receber seu pedido apresentar esse documento para validação
          </Text>
        </View>
      </Page>
    </Document>
  );
};

InvoicePDF.propTypes = {
  invoice: PropTypes.object.isRequired
};

export default InvoicePDF;
